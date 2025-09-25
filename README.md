# Jeevan Aadhar - Donation Management System

A web-based platform for managing donations, connecting donors with institutes and suppliers for humanitarian aid.

## ⚠️ Important Notice

This is a **DEMO VERSION** of the project that has been sanitized for public GitHub hosting. All sensitive information including:
- Database connections
- API keys
- Payment gateway integrations
- Real backend functionality

has been removed or replaced with demo placeholders.

## Project Structure

```
techHorizon project/
├── jeevan-aadhar-backend/     # Backend server files
│   ├── server.js              # Node.js/Express server (demo version)
│   ├── donor_app.py           # Flask server (demo version)
│   └── requirements.txt       # Python dependencies
├── tech_horizon_frontend/     # Frontend files
│   ├── index.html            # Main landing page
│   ├── donors.html           # Donor registration
│   ├── institute.html        # Institute registration
│   ├── suppliers.html        # Supplier management
│   ├── payment.html          # Payment interface
│   └── *.css, *.js          # Styling and functionality
└── README.md                 # This file
```

## Features (Demo Version)

- **Donor Management**: Registration form for donors
- **Institute Portal**: Interface for institutes to request resources
- **Supplier Network**: Platform for suppliers to offer resources
- **Payment Interface**: Demo payment integration (non-functional)
- **Responsive Design**: Mobile-friendly interface

## Setup Instructions

### Frontend Only
1. Open `index.html` in a web browser
2. Navigate through the different sections

### Backend Demo (Node.js)
1. Navigate to `jeevan-aadhar-backend/`
2. Install dependencies: `npm install express`
3. Run server: `node server.js`
4. Access at `http://localhost:5000`

### Backend Demo (Python Flask)
1. Navigate to `jeevan-aadhar-backend/`
2. Install dependencies: `pip install -r requirements.txt`
3. Run server: `python donor_app.py`
4. Access at `http://localhost:5000`

## Technologies Used

- **Frontend**: HTML5, CSS3, JavaScript, Chart.js
- **Backend**: Node.js/Express, Python/Flask
- **Database**: MongoDB (removed in demo), SQLite (removed in demo)
- **Payment**: Razorpay integration (removed in demo)

## Demo Limitations

- No actual data persistence
- Payment integration is non-functional
- API endpoints return demo responses only
- No user authentication
- No real database connections

## For Production Use

To make this project production-ready, you would need to:

1. **Database Setup**
   - Configure MongoDB or your preferred database
   - Update connection strings in server files
   - Implement proper data models

2. **Payment Integration**
   - Add your Razorpay API keys
   - Implement proper payment handling
   - Add payment verification

3. **Security**
   - Add user authentication
   - Implement input validation
   - Add CORS configuration
   - Use environment variables for sensitive data

4. **API Integration**
   - Connect frontend forms to backend APIs
   - Implement proper error handling
   - Add data validation

## Contributing

This is a demo project. For actual implementation, ensure you:
- Never commit sensitive information
- Use environment variables for API keys
- Implement proper security measures
- Follow best practices for production deployment

## License

This project is for educational/demonstration purposes.