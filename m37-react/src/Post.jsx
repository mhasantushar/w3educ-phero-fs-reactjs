export default function Posts({post}){
  const {title, body} = post;
  return (
    <div className="box">
      <p><strong>{title}</strong></p>
      <p>{body}</p>
    </div>
  );
}