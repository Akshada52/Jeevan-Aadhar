from flask import Flask, request, jsonify, render_template
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # Enable CORS for frontend requests

# Serve the HTML file
@app.route('/')
def home():
    return render_template('index.html')

# Demo API endpoints (no database functionality)
@app.route('/api/donor', methods=['POST'])
def add_donor():
    # Demo response - no actual data saving
    return jsonify({"message": "Demo: Donor data would be saved here"}), 201

@app.route('/api/donors', methods=['GET'])
def get_donors():
    # Demo response - no actual data retrieval
    return jsonify([])

@app.route('/api/donor/<int:id>', methods=['GET'])
def get_donor(id):
    # Demo response - no actual data retrieval
    return jsonify({"error": "Demo: Donor data would be retrieved here"}), 404

@app.route('/api/donor/<int:id>', methods=['PATCH'])
def update_donor(id):
    # Demo response - no actual data updating
    return jsonify({"message": "Demo: Donor data would be updated here"})

if __name__ == '__main__':
    print("Demo Flask server starting...")
    print("Note: This is a demo version with no database functionality")
    app.run(debug=True, port=5000)