export default function Friend({friend}) {
  // console.log (friend);
  const {name,email, phone} = friend;

  return (
    <div className="box">
      <p>Name: {name}</p>
      <p>Email: {email}</p>
      <p>Phone: {phone}</p>
    </div>
  );
}
