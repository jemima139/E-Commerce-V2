import React, { useState } from 'react';

const SubscribeSection = () => {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        productType: '',
        comment: ''
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData({
            ...formData,
            [id]: value
        });
    };

    const validateForm = () => {
        const newErrors = {};

        if (!formData.name.trim()) {
            newErrors.name = 'Name is required';
        }

        const phonePattern = /^\d{3}-\d{3}-\d{4}$/;
        if (!formData.phone.match(phonePattern)) {
            newErrors.phone = 'Phone number must be in the format 123-456-7890';
        }

        const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!formData.email.match(emailPattern)) {
            newErrors.email = 'Invalid email address';
        }

        if (!formData.productType) {
            newErrors.productType = 'Product type is required';
        }

        setErrors(newErrors);

        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (validateForm()) {
            // Handles successful form submission
            console.log('Form data:', formData);
            // Resets form after successful submission
            setFormData({
                name: '',
                phone: '',
                email: '',
                productType: '',
                comment: ''
            });
        }
    };

    return (
        <main>
            <section>
                <div className="container">
                    <h1>Subscribe to Us</h1>
                    <p>Submit your information here for monthly deals and exclusive offers</p>
                    <div className="contact-box">
                        <div className="contact-left">
                            <h3>Send Your Feedback</h3>
                            <form id="subscribeForm" onSubmit={handleSubmit}>
                                <div className="input-row">
                                    <div className="input-group">
                                        <label htmlFor="name">Name</label>
                                        <input
                                            id="name"
                                            type="text"
                                            placeholder="Name Here"
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                        />
                                        {errors.name && <div className="error-message">{errors.name}</div>}
                                    </div>
                                    <div className="input-group">
                                        <label htmlFor="phone">Phone Number</label>
                                        <input
                                            id="phone"
                                            maxLength="12"
                                            type="text"
                                            placeholder="123-456-6754"
                                            pattern="\d{3}-\d{3}-\d{4}"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            required
                                        />
                                        {errors.phone && <div className="error-message">{errors.phone}</div>}
                                    </div>
                                </div>
                                <div className="input-row">
                                    <div className="input-group">
                                        <label htmlFor="email">Email</label>
                                        <input
                                            id="email"
                                            type="email"
                                            placeholder="johndoe123@gmail.com"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                        />
                                        {errors.email && <div className="error-message">{errors.email}</div>}
                                    </div>
                                    <div className="input-group">
                                        <label htmlFor="productType">Product type</label>
                                        <select
                                            id="productType"
                                            value={formData.productType}
                                            onChange={handleChange}
                                            required
                                        >
                                            <option value="">None</option>
                                            <option value="ring">Ring</option>
                                            <option value="necklace">Necklace</option>
                                            <option value="other">Other</option>
                                        </select>
                                        {errors.productType && <div className="error-message">{errors.productType}</div>}
                                    </div>
                                </div>
                                <label htmlFor="comment">Comment Section</label>
                                <textarea
                                    id="comment"
                                    rows="3"
                                    placeholder="Your Message"
                                    value={formData.comment}
                                    onChange={handleChange}
                                ></textarea>
                                <button type="submit">SEND</button>
                            </form>
                        </div>
                        <div className="contact-right">
                            <h3>Reach Us</h3>
                            <table>
                                <tbody>
                                    <tr>
                                        <td>Email:</td>
                                        <td>luxe@lxdiamonds.com</td>
                                    </tr>
                                    <tr>
                                        <td>Phone Number:</td>
                                        <td>(888) 234-5646</td>
                                    </tr>
                                    <tr>
                                        <td>Address:</td>
                                        <td>2015 Main Street, New York, 10002</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </section>
            <style jsx>{`
                .container {
                    max-width: 80%;
                    margin: 50px auto;
                    padding: 5%;
                }

                .contact-box {
                    display: flex;
                    flex-direction: column;
                    background: #333333;
                    padding: 20px;
                }

                .contact-left, .contact-right {
                    padding: 20px;
                }

                .contact-left {
                    background: #fff;
                    color: #333;
                    
                }

                .contact-right {
                    background: #333333;
                    color: #ededed;
                }

                h1, .contact-left h3, .contact-right h3 {
                    margin-bottom: 10px;
                }

                .container h1, .container p {
                    color: black;
                }

                .input-row {
                    display: flex;
                    flex-direction: column;
                    margin-bottom: 20px;
                    
                }
                
                form input {
                    width: 100%;
                    max-width: 400px;
                    height: 45px;
                    border-radius: 4px;
                    text-align: center;
                    margin-top: 20px;
                    outline: none;
                }

                @media (min-width: 768px) {
                    .input-row {
                        flex-direction: row;
                        justify-content: space-between;
                    }

                    .input-group {
                        flex-basis: 45%;
                    }

                    .contact-box {
                        flex-direction: row;
                    }

                    .contact-left, .contact-right {
                        flex: 1;
                    }
                }

                @media (min-width: 1024px) {
                    .container {
                        max-width: 70%;
                    }

                    .input-row {
                        margin-bottom: 20px;
                    }
                }

                input, textarea {
                    width: 100%;
                    border: 1px solid black;
                    padding: 10px;
                    box-sizing: border-box;
                    margin-bottom: 10px;
                }

                label {
                    margin-bottom: 6px;
                    display: block;
                }

                button {
                    background: transparent;
                    border: 2px solid #333;
                    color: #333;
                    border-radius: 4px;
                    padding: 10px 20px;
                    font-size: 15px;
                    cursor: pointer;
                    text-transform: uppercase;
                }

                button:hover {
                    background: #333;
                    color: #fff;
                }

                table {
                    width: 100%;
                }

                tr td:first-child {
                    padding-right: 20px;
                    font-weight: bold;
                }

                tr td {
                    padding: 10px 0;
                }

                .input-group .error-message {
                    color: red;
                    margin-top: 5px;
                    font-size: 12px;
                }
            `}</style>
        </main>
    );
};

export default SubscribeSection;
