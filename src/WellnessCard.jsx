export default function WellnessCard({ title, description, category, image }) {
    return (
      <div className="card">
        <img src={image} alt={title} className="card-img" />
        <h3>{title}</h3>
        <p className="category">{category}</p>
        <p>{description}</p>
        <button className="card-btn">Learn More</button>
      </div>
    );
  }
  