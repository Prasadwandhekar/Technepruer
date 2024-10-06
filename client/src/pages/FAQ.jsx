import { useState } from 'react';
import '../style/FAQ.css'; // Import CSS file for styling

const FAQ = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const questions = [
        { question: 'What is your return policy?', answer: 'Our return policy lasts 30 days...' },
        { question: 'How do I track my order?', answer: 'You can track your order using the tracking number...' },
        { question: 'What payment methods do you accept?', answer: 'We accept various payment methods including credit cards...' },
        { question: 'How can I contact customer service?', answer: 'You can contact customer service via email or phone...' },
        { question: 'Do you offer international shipping?', answer: 'Yes, we offer international shipping to most countries...' },
        { question: 'How do I change my account details?', answer: 'You can change your account details through the account settings page...' }
    ];

    const handleQuestionClick = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <section className="faq-section">
            <div className="faq-container">
                <h1 className="faq-heading">Frequently Asked Questions</h1>
                <div className="faq-list">
                    {questions.map((item, index) => (
                        <div className="faq-item" key={index}>
                            <div
                                className={`faq-question ${activeIndex === index ? 'active' : ''}`}
                                onClick={() => handleQuestionClick(index)}
                            >
                                <span>{item.question}</span>
                                <span className={`faq-icon ${activeIndex === index ? 'rotate' : ''}`}>▲</span>
                            </div>
                            {activeIndex === index && (
                                <div className="faq-answer">
                                    <p>{item.answer}</p>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;
