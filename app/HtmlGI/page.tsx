import DropDown from '../DropDown/page';
import Button from '../Button/page'

export default function HtmlGI() {
  return (
    <div className="flex flex-col items-center space-y-2 mt-8 h-screen">
      <div className="flex justify-center items-top mt-36">  
        <DropDown />
      </div>
      <div className="flex flex-col justify-center items-center h-auto space-y-8 mt-8">
        <Button label="Wordをアップロード" variant="secondary" navigateTo="./HtmlGI" />
        <Button label="HTMLを生成" variant="secondary" navigateTo="./Settings" />
        <Button label="HTMLをダウンロード" variant="secondary" />
      </div>
      <p>tes</p>
    </div>
  );
}