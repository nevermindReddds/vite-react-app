import logo from "/mid_348779_607834.jpg";

export default function Header() {
  const now = new Date();

  return (
    <header>
      <img src={logo} alt={"result"} />
      <h3>Result University</h3>
      <span>Время сейчас: {now.toLocaleTimeString()} </span>
    </header>
  );
}
