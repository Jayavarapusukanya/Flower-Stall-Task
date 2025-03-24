import React from "react";
import './TeamSection.css';

const TeamSection = () => {
  const teamMembers = [
    { name: "William Gabriel", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlcRUNEbv_ljK7IeoXHnc1cXdI3scwhUGEPA&s" },
    { name: "Kelian Anderson", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxsk9SXAGnWpssH4Jal2C5LCbydSjE9adgxw&s" },
    { name: "James Carter", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5Ww40TBK1gAtQGqGnvG5AyR0-4Jratr6LwQ&s" },
    { name: "Adam Joseph", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQ6erx1VQps-azObvMRpfTkXyB49wUdyNQ3g&s" }
  ];

  return (
    <section className="team-section">
      <h2>Our Team</h2>
      <div className="team-grid">
        {teamMembers.map((member, index) => (
          <div className="team-member" key={index}>
            <img src={member.image} alt={member.name} />
            <h3>{member.name}</h3>
            <p>Team Expert</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TeamSection;
