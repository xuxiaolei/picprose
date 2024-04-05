"use client";
import React from "react";
import {
  Tabs,
  Tab,
  Select,
  SelectItem,
  SliderValue,
  Selection,
  SelectSection,
  Input,
  Divider,
  Slider,
  Accordion,
  AccordionItem,
  Card,
  Listbox,
  CardBody,
  ListboxItem,
  Textarea,
  ScrollShadow,
  Avatar,
  Image,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
  Dropdown,
  DropdownMenu,
  DropdownItem,
  DropdownTrigger,
} from "@nextui-org/react";
import unsplash from "./unsplashConfig";
import { TwitterPicker, CirclePicker } from "react-color";
import { deviconList } from "./devicon";
export const RightPropertyPanel = (props) => {
  const [titleValue, setTitleValue] = React.useState("");
  const [subTitleValue, setSubTitleValue] = React.useState("");
  const [authorValue, setAuthorValue] = React.useState("");
  const [fontValue, setFontValue] = React.useState("font-anke");
  const [iconValue, setIconValue] = React.useState("");
  const [backColor, setBackColor] = React.useState("");
  const [deviconValue, setDevIconValue] = React.useState<Selection>(
    new Set(["css3-plain"])
  );
  const [aspectValue, setAspectValue] = React.useState("aspect-[16/9]");
  const [blurValue, setBlurValue] = React.useState<SliderValue>(0);
  const inputRef = React.useRef(null);

  const handleFileChange = (event) => {
    if (event.target.files[0] != null) {
      const file = URL.createObjectURL(event.target.files[0]);
      setIconValue(file);
      setDevIconValue(new Set([""]));
    }
  };

  const handleAspectSelectionChange = (
    e: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setAspectValue(e.target.value);
  };

  const onFontSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFontValue(e.target.value);
  };

  const getColorPlaceHolder = () => {
    backColor.replace("#", "")
  }

  const [propertyInfo, setPropertyInfo] = React.useState({
    font: "",
    title: "",
    subTitle: "",
    author: "",
    icon: "",
    devicon: "",
    color: "",
    aspect: "",
    blur: "",
  });

  React.useEffect(() => {
    setPropertyInfo((preValue) => ({
      ...preValue,
      author: authorValue,
    }));
  }, [authorValue]);

  React.useEffect(() => {
    setPropertyInfo((preValue) => ({
      ...preValue,
      title: titleValue,
    }));
  }, [titleValue]);

  React.useEffect(() => {
    setPropertyInfo((preValue) => ({
      ...preValue,
      icon: iconValue,
    }));
  }, [iconValue]);

  React.useEffect(() => {
    setPropertyInfo((preValue) => ({
      ...preValue,
      font: fontValue,
    }));
  }, [fontValue]);

  React.useEffect(() => {
    const icon = Array.from(deviconValue)[0].toString();
    setPropertyInfo((preValue) => ({
      ...preValue,
      devicon: icon,
    }));
  }, [deviconValue]);

  React.useEffect(() => {
    var blurLevel: string = "backdrop-blur-none";
    if (typeof blurValue === "number") {
      if (blurValue == 0) {
        blurLevel = "backdrop-blur-none";
      } else if (blurValue == 20) {
        blurLevel = "backdrop-blur-sm";
      } else if (blurValue == 40) {
        blurLevel = "backdrop-blur";
      } else if (blurValue == 60) {
        blurLevel = "backdrop-blur-md";
      } else if (blurValue == 80) {
        blurLevel = "backdrop-blur-lg";
      } else if (blurValue == 100) {
        blurLevel = "backdrop-blur-xl";
      }
    }
    setPropertyInfo((preValue) => ({
      ...preValue,
      blur: blurLevel,
    }));
  }, [blurValue]);

  React.useEffect(() => {
    setPropertyInfo((preValue) => ({
      ...preValue,
      aspect: aspectValue,
    }));
  }, [aspectValue]);

  React.useEffect(() => {
    props.onPropInfoChange(propertyInfo);
  }, [propertyInfo]);

  const dowloadImage = (imgFormat: string) => {
    props.onImageDowloadClick(imgFormat);
  };

  const img_aspect_x_list = [
    // 横屏
    { label: "1 : 1", value: "aspect-square", description: "900x450" },
    { label: "2 : 1", value: "aspect-[2/1]", description: "900x450" },
    { label: "3 : 2", value: "aspect-[3/2]", description: "900x450" },
    { label: "4 : 3", value: "aspect-[4/3]", description: "900x450" },
    { label: "16: 9", value: "aspect-[16/9]", description: "900x450" },
  ];

  const img_aspect_y_list = [
    //  竖屏
    { label: "1:2", value: "aspect-[1/2]", description: "900x450" },
    { label: "2:3", value: "aspect-[2/3]", description: "900x450" },
    { label: "3:4", value: "aspect-[3/4]", description: "900x450" },
    { label: "9:16", value: "aspect-[9/16]", description: "900x450" },
  ];

  const font_list = [
    {
      label: "Font-DingTalk",
      value: "font-dingtalk",
      description: "The largest land animal",
    },
    {
      label: "Font-OpenSans",
      value: "font-opensans",
      description: "The largest land animal",
    },
    {
      label: "Font-Anke",
      value: "font-anke",
      description: "The second most popular pet in the world",
    },
    {
      label: "Font-Roboto",
      value: "font-roboto-mono",
      description: "The most popular pet in the world",
    },
  ];

  const colors = [
    {
      label: "red",
      value: "red",
      description: "The second most popular pet in the world",
    },
  ];

  const backStyle = {
    fontSize: '20px',
    backgroundColor: backColor,
    borderWidth: '6px',
    borderColor: '#E9E9EB'
  };


  const handleColorChangeComplete = (color) => {
    console.log(color.hex );
    setBackColor(color.hex)
  };

  return (
    <div className="w-full flex flex-col h-screen">
      <div className="w-full">
        <Navbar
          classNames={{
            wrapper: "px-4",
          }}
        >
          <NavbarBrand>
            <p className="text-gray-350 font-bold text-inherit">参数</p>
          </NavbarBrand>

          <NavbarContent justify="end">
            <NavbarItem>
              <Button
                as={Link}
                color="primary"
                variant="flat"
                target="_blank"
                href="https://www.producthunt.com/posts/picprose"
              >
                ProductHunt
              </Button>
            </NavbarItem>
          </NavbarContent>
        </Navbar>
      </div>
      <div className="flex-grow overflow-y-scroll overflow-x-hidden justify-center flex flex-wrap px-4">
        <Select
          label="比例"
          className="max-w-xs py-2"
          defaultSelectedKeys={["aspect-[16/9]"]}
          onChange={handleAspectSelectionChange}
        >
          <SelectSection showDivider title="横屏">
            {img_aspect_x_list.map((item) => (
              <SelectItem key={item.value} value={item.value}>
                {item.label}
              </SelectItem>
            ))}
          </SelectSection>
          <SelectSection showDivider title="竖屏">
            {img_aspect_y_list.map((item) => (
              <SelectItem key={item.value} value={item.value}>
                {item.label}
              </SelectItem>
            ))}
          </SelectSection>
        </Select>

        <Slider
          label="模糊"
          value={blurValue}
          onChange={setBlurValue}
          size="sm"
          step={20}
          marks={[
            {
              value: 20,
              label: "20",
            },
            {
              value: 40,
              label: "40",
            },
            {
              value: 60,
              label: "60",
            },
            {
              value: 80,
              label: "80",
            },
          ]}
          className="max-w-md py-2"
        />
         
        <div className="flex w-full py-2">
          <div className="w-4/5">
            <Input
              type="url"
              label="遮罩颜色"
              placeholder={backColor.replace("#", "")}
              startContent={
                <div className="pointer-events-none flex items-center">
                  <span className="text-default-400 text-small">#</span>
                </div>
              }
            />
          </div>
          <div className="flex-grow" />
          <div className="w-1/6 ml-2 mt-1">
            <Dropdown>
              <DropdownTrigger>
                <Button  
                isIconOnly
              color="primary"
              variant="bordered"
              size="lg"
             style={backStyle}
              >
                </Button>
              </DropdownTrigger>
              <DropdownMenu
                aria-label="Single selection example"
                variant="flat"
                disallowEmptySelection
                selectionMode="single"
              >
                <DropdownItem key="text">
                  <div className="m-1">
                    <CirclePicker
                      circleSpacing={16}
                      circleSize={26}
                      colors={[
                        "#f44336",
                        "#e91e63",
                        "#9c27b0",
                        "#673ab7",
                        "#3f51b5",
                        "#2196f3",
                        "#03a9f4",
                        "#00bcd4",
                        "#009688",
                        "#4caf50",
                        "#8bc34a",
                        "#cddc39",
                      ]}
                      onChangeComplete={handleColorChangeComplete}
                    />
                  </div>
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </div>
        </div>
        <Divider />
        <Select
          label="字体"
          className="max-w-xs py-2"
          onChange={onFontSelectChange}
          defaultSelectedKeys={["font-anke"]}
        >
          {font_list.map((font) => (
            <SelectItem key={font.value} value={font.value}>
              {font.label}
            </SelectItem>
          ))}
        </Select>


      
        <div className="flex w-full py-2">
          <div className="w-4/5">
            <Select label="图标" onSelectionChange={setDevIconValue}>
              {deviconList.map((item) => (
                <SelectItem
                  key={item.name + "-" + item.versions.font[0]}
                  textValue={item.name}
                >
                  <div className="flex gap-2 items-center">
                    <i
                      className={`devicon-${item.name}-${item.versions.font[0]} text-black dev-icon text-2xl`}
                    ></i>
                    <div className="flex flex-col">{item.name}</div>
                  </div>
                </SelectItem>
              ))}
            </Select>
          </div>
          <div className="flex-grow" />
          <div className="w-1/6 ml-2 mt-1">
            <input
              type="file"
              className="hidden"
              onChange={handleFileChange}
              ref={inputRef}
            />
            <Button
              isIconOnly
              color="primary"
              variant="flat"
              size="lg"
              onClick={() => inputRef.current.click()}
            >
              +
            </Button>
          </div>
        </div>
        <Divider />
        <Textarea
          label="标题"
          placeholder="输入标题"
          className="max-w-xs py-2"
          value={titleValue}
          onValueChange={setTitleValue}
        />

        <Input
          label="作者"
          type="search"
          className="py-2"
          placeholder="输入作者"
          value={authorValue}
          onValueChange={setAuthorValue}
        />
      </div>
      <Divider />
      <div className="w-full mt-4 px-4">
        <div className="text-gray-400 text-sm">下载图像</div>
        <div className="flex justify-between my-3">
          <Button
            onClick={() => dowloadImage("jpg")}
            as={Link}
            color="primary"
            variant="flat"
          >
            JPG
          </Button>
          <Button
            onClick={() => dowloadImage("png")}
            as={Link}
            color="primary"
            variant="flat"
          >
            PNG
          </Button>
          <Button
            onClick={() => dowloadImage("svg")}
            as={Link}
            color="primary"
            variant="flat"
          >
            SVG
          </Button>
        </div>
      </div>
    </div>
  );
};
