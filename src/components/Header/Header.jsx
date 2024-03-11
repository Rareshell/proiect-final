import "./Header.css";

export default function Header() {
  return (
    <div>
      <div className="headerTitles">
        <span className="headerTitleSm">Journal</span>
        <span className="headerTitleLg">What if?</span>
      </div>
      <img
        className="headerImg"
        src="https://i.pinimg.com/originals/21/bd/f2/21bdf2c962135a690d5d0ab68b389b4c.jpg"
        alt=""
      />
    </div>
  );
}
