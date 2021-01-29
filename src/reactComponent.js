export default function Vote(props) {
  console.log(props);
  return (
    <div className="my-haha" style={{ color: 'blue' }}>
      我是投票组件{props.children}
    </div>
  );
}
