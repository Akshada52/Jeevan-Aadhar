from flask import Flask, request, jsonify, render_template
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # Enable CORS for frontend requests

# Configure SQLite database
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///donors.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
db = SQLAlchemy(app)

# Define Donor model
class Donor(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False)
    email = db.Column(db.String(100), nullable=False)
    contact = db.Column(db.String(20), nullable=False)
    address = db.Column(db.Text, nullable=False)
    donation_amount = db.Column(db.Float, nullable=False)
    payment_method = db.Column(db.String(50), nullable=False)

    def __init__(self, name, email, contact, address, donation_amount, payment_method):
        self.name = name
        self.email = email
        self.contact = contact
        self.address = address
        self.donation_amount = donation_amount
        self.payment_method = payment_method

# Create database tables
with app.app_context():
    db.create_all()

# Serve the HTML file
@app.route('/')
def home():
    return render_template('index.html')

# API endpoint to receive donor data
@app.route('/api/donor', methods=['POST'])
def add_donor():
    try:
        data = request.get_json()
        new_donor = Donor(
            name=data['name'],
            email=data['email'],
            contact=data['contact'],
            address=data['address'],
            donation_amount=float(data['donationAmount']),
            payment_method=data['paymentMethod']
        )
        db.session.add(new_donor)
        db.session.commit()
        return jsonify({"message": "Donor data saved successfully"}), 201
    except Exception as e:
        return jsonify({"error": str(e)}), 400

# API endpoint to retrieve all donor records
@app.route('/api/donors', methods=['GET'])
def get_donors():
    donors = Donor.query.all()
    donor_list = [
        {
            "id": donor.id,
            "name": donor.name,
            "email": donor.email,
            "contact": donor.contact,
            "address": donor.address,
            "donationAmount": donor.donation_amount,
            "paymentMethod": donor.payment_method,
        }
        for donor in donors
    ]
    return jsonify(donor_list)

# API endpoint to retrieve a single donor by ID
@app.route('/api/donor/<int:id>', methods=['GET'])
def get_donor(id):
    donor = Donor.query.get_or_404(id)
    donor_data = {
        "id": donor.id,
        "name": donor.name,
        "email": donor.email,
        "contact": donor.contact,
        "address": donor.address,
        "donationAmount": donor.donation_amount,
        "paymentMethod": donor.payment_method,
    }
    return jsonify(donor_data)

# API endpoint to update donor data
@app.route('/api/donor/<int:id>', methods=['PATCH'])
def update_donor(id):
    try:
        data = request.get_json()
        donor = Donor.query.get_or_404(id)

        if 'name' in data:
            donor.name = data['name']
        if 'email' in data:
            donor.email = data['email']
        if 'contact' in data:
            donor.contact = data['contact']
        if 'address' in data:
            donor.address = data['address']
        if 'donationAmount' in data:
            donor.donation_amount = float(data['donationAmount'])
        if 'paymentMethod' in data:
            donor.payment_method = data['paymentMethod']

        db.session.commit()
        return jsonify({"message": "Donor data updated successfully"})
    except Exception as e:
        return jsonify({"error": str(e)}), 400

if __name__ == '__main__':
    app.run(debug=True, port=5000)