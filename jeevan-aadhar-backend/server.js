const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = 5000;

// Middleware
app.use(bodyParser.json());
app.use(cors());
app.use(express.static(path.join(__dirname, '../public'))); // Serve static files

// MongoDB Connection
mongoose.connect('mongodb+srv://akshadab52:ff25shSQ6kPU8VMZ@cluster0.mauzd.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log('Connected to MongoDB'))
    .catch((err) => console.error('MongoDB connection error:', err));

// Define Schemas
const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    contact: String,
    address: String,
    role: String, // Donor, Institute, Supplier
    additionalDetails: Object, // Store role-specific data
});

const transactionSchema = new mongoose.Schema({
    donorId: String,
    instituteId: String,
    amount: Number,
    paymentStatus: String,
});

const User = mongoose.model('User', userSchema);
const Transaction = mongoose.model('Transaction', transactionSchema);

// Routes

// Home route to serve the HTML file
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public', 'index.html'));
});

// Save Donor Data
app.post('/api/donor', async (req, res) => {
    try {
        const { name, email, contact, address, donationAmount, paymentMethod } = req.body;
        const newUser = new User({
            name,
            email,
            contact,
            address,
            role: 'Donor',
            additionalDetails: { donationAmount, paymentMethod },
        });
        await newUser.save();
        res.status(201).json({ message: 'Donor data saved successfully!' });
    } catch (error) {
        res.status(500).json({ error: 'Error saving donor data' });
    }
});

// Save Institute Data
app.post('/api/institute', async (req, res) => {
    try {
        const { name, email, contact, address, resourcesNeeded, quantity, urgency } = req.body;
        const newUser = new User({
            name,
            email,
            contact,
            address,
            role: 'Institute',
            additionalDetails: { resourcesNeeded, quantity, urgency },
        });
        await newUser.save();
        res.status(201).json({ message: 'Institute data saved successfully!' });
    } catch (error) {
        res.status(500).json({ error: 'Error saving institute data' });
    }
});

// Save Supplier Data
app.post('/api/supplier', async (req, res) => {
    try {
        const { name, email, contact, address, productsSupplied, deliveryStatus } = req.body;
        const newUser = new User({
            name,
            email,
            contact,
            address,
            role: 'Supplier',
            additionalDetails: { productsSupplied, deliveryStatus },
        });
        await newUser.save();
        res.status(201).json({ message: 'Supplier data saved successfully!' });
    } catch (error) {
        res.status(500).json({ error: 'Error saving supplier data' });
    }
});

// Save Transaction Data
app.post('/api/transaction', async (req, res) => {
    try {
        const { donorId, instituteId, amount, paymentStatus } = req.body;
        const newTransaction = new Transaction({
            donorId,
            instituteId,
            amount,
            paymentStatus,
        });
        await newTransaction.save();
        res.status(201).json({ message: 'Transaction data saved successfully!' });
    } catch (error) {
        res.status(500).json({ error: 'Error saving transaction data' });
    }
});

// Get all users
app.get('/api/users', async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ error: 'Error fetching users' });
    }
});

// Get a user by ID
app.get('/api/user/:id', async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ error: 'Error fetching user' });

    }
});

// Update user data
app.patch('/api/user/:id', async (req, res) => {
    try {
        const updates = req.body;
        const user = await User.findByIdAndUpdate(req.params.id, updates, { new: true });
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }
        res.status(200).json({ message: 'User data updated successfully!', user });
    } catch (error) {
        res.status(500).json({ error: 'Error updating user data' });
    }
});

// Start Server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});