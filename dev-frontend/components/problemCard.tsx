import React from 'react';

interface ProblemProps {
  title: string;
  description: string;
  difficulty: string;
}

const ProblemCard: React.FC<ProblemProps> = ({ title, description, difficulty }) => {
  return (
    <div className="card mb-3 shadow-sm">
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
        <p className="text-muted">
          <strong>Difficulty:</strong> {difficulty}
        </p>
      </div>
    </div>
  );
};

export default ProblemCard;
