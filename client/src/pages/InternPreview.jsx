import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import '../style/InternPreview.css';
import { useAuth } from '../store/auth';

const InternPreview = () => {
    const { id } = useParams();
    const { intern } = useAuth();

    const [internship, setInternship] = useState(null);

    const fetchInternship = async () => {
        try {
            const response = await fetch(`http://localhost:8000/api/form/internship/preview/${id}`);
            if (response.ok) {
                const data = await response.json();
                setInternship(data);
            } else {
                toast.error('Failed to fetch internship data');
            }
        } catch (error) {
            console.error('Error fetching internship data:', error);
            toast.error('Error fetching internship data');
        }
    };

    useEffect(() => {
        fetchInternship();
    }, [id]);

    if (!internship) {
        return <div>Loading...</div>;
    }

    return (
        <div className="internship-preview-container">
            <div className="internship-preview">
                <img src={internship.photoUrl} alt={internship.name} className="internship-photo" />
                <h1 className="internship-title">{internship.name}</h1>
                <p className="internship-description"><strong>Description:</strong> {internship.description}</p>
                <p className="internship-domain"><strong>Domain:</strong> {internship.domain}</p>
                <p className="internship-languages"><strong>Languages:</strong> {internship.languages.join(', ')}</p>
                <p className="internship-certifications"><strong>Certifications:</strong> {internship.certifications.join(', ')}</p>
                <p className="internship-duration"><strong>Duration:</strong> {internship.duration}</p>
                <p className="internship-amount"><strong>Amount:</strong> ${internship.amount}</p>
                <p className="internship-mentors"><strong>Mentors:</strong> {internship.mentors.join(', ')}</p>
                <p className="internship-start-date"><strong>Start Date:</strong> {new Date(internship.startDate).toLocaleDateString()}</p>
                <p className="internship-feedback-support"><strong>Feedback & Support:</strong> {internship.feedbackSupport}</p>
                <p className="internship-course-language"><strong>Course Language:</strong> {internship.courseLanguage}</p>
                <Link to={`/internship/apply/${internship._id}`} className="btn btn-preview" >
                  Apply
                </Link>   
             </div>
        </div>
    );
};

export default InternPreview;
