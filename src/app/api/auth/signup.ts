import { NextApiRequest, NextApiResponse } from 'next';
import { connectToDatabase } from '@/shared/utils/mangodb';
import bcrypt from 'bcrypt';

interface SignUpData {
    name: string;
    email: string;
    password: string;
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        const { name, email, password }: SignUpData = req.body;

        // Connect to database
        const { db } = await connectToDatabase();

        // Check if the user already exists
        const existingUser = await db.collection('users').findOne({ email });
        if (existingUser) {
            return res.status(400).json({ error: 'User already exists' });
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Insert the new user into the database
        const newUser = {
            name,
            email,
            password: hashedPassword,
        };

        await db.collection('users').insertOne(newUser);

        return res.status(201).json({ message: 'User created successfully' });
    } else {
        return res.status(405).json({ message: 'Method not allowed' });
    }
}
