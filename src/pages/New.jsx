import Header from "../components/Header";
import Button from "../components/Button";
import Editer from "../components/Editor";

const New = () => {
  return (
    <div>
      <Header
        title={"새 일기 쓰기"}
        leftChild={<Button text={"< 뒤로가기"} />}
      />
      <Editer />
    </div>
  );
};
export default New;
