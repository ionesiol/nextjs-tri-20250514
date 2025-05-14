// import Image from "next/image";
import DropDown from './DropDown/page';
import Button from './Button/page';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="flex flex-col items-center space-y-2 mt-8 h-screen">
      <div className="flex justify-center items-top mt-36">  
        <DropDown />
      </div>
      <div className="flex flex-col justify-center items-center h-auto space-y-8 mt-8">
        <Button label="新規作成" variant="secondary" navigateTo="./HtmlGI" />
        <Button label="編集" variant="secondary" navigateTo="./Settings" />
        <Button label="記事を生成" variant="secondary" />
        <Image src={"file.svg"} alt="logo" width={200} height={200} />
      </div>
    </div>
  );
}
