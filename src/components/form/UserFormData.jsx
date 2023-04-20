import React from "react";
import { InboxOutlined, InfoCircleOutlined } from "@ant-design/icons";
import {
  Button,
  Col,
  Form,
  Input,
  Radio,
  Rate,
  Row,
  Select,
  Slider,
  Switch,
  Upload,
  DatePicker,
  TimePicker,
  Space,
} from "antd";
const { Option } = Select;
const { RangePicker } = DatePicker;

const formItemLayout = {
  labelCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 6,
      offset: 0,
    },
  },
  wrapperCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 18,
    },
  },
};

const rangeConfig = {
  rules: [
    {
      type: "array",
      required: true,
      message: "Please select time!",
    },
  ],
};

const config = {
  rules: [
    {
      type: "object",
      required: true,
      message: "Please select time!",
    },
  ],
};

const UserFormData = () => {
  const onFinish = (fieldsValue) => {
    // Should format date value before submit.
    const rangeValue = fieldsValue["range-picker"];
    const rangeTimeValue = fieldsValue["range-time-picker"];
    const values = {
      ...fieldsValue,
      "date-picker": fieldsValue["date-picker"].format("YYYY-MM-DD"),
      "date-time-picker": fieldsValue["date-time-picker"].format(
        "YYYY-MM-DD HH:mm:ss"
      ),
      "month-picker": fieldsValue["month-picker"].format("YYYY-MM"),
      "range-picker": [
        rangeValue[0].format("YYYY-MM-DD"),
        rangeValue[1].format("YYYY-MM-DD"),
      ],
      "range-time-picker": [
        rangeTimeValue[0].format("YYYY-MM-DD HH:mm:ss"),
        rangeTimeValue[1].format("YYYY-MM-DD HH:mm:ss"),
      ],
      "time-picker": fieldsValue["time-picker"].format("HH:mm:ss"),
    };
    console.log("Received values of form: ", values);
  };

  const normFile = (e) => {
    console.log("Upload event:", e);
    if (Array.isArray(e)) {
      return e;
    }
    return e?.fileList;
  };

  return (
    <Form
      name="validate_user_data"
      onFinish={onFinish}
      initialValues={{
        "input-number": 3,
        "checkbox-group": ["A", "B"],
        rate: 3.5,
      }}
      style={{
        marginBlockStart: "3rem",
      }}
      {...formItemLayout}
    >
      <Row gutter={[8, 8]}>
        <Col span={12}>
          <Form.Item
            label="Full Name"
            tooltip={{
              title: "Tooltip with customize icon",
              icon: <InfoCircleOutlined />,
            }}
          >
            <Input placeholder="input placeholder" />
          </Form.Item>
        </Col>

        <Col span={12}>
          <Form.Item label="Password" hasFeedback validateStatus="error">
            <Input.Password
              allowClear
              placeholder="with input password and allowClear"
            />
          </Form.Item>
        </Col>
      </Row>

      <Row gutter={[8, 8]}>
        <Col span={12}>
          <Form.Item
            name="select"
            label="Select"
            hasFeedback
            rules={[
              {
                required: true,
                message: "Please select your country!",
              },
            ]}
          >
            <Select placeholder="Please select a country">
              <Option value="china">China</Option>
              <Option value="usa">U.S.A</Option>
            </Select>
          </Form.Item>
        </Col>

        <Col span={12}>
          <Form.Item
            name="select-multiple"
            label="Select[multiple]"
            rules={[
              {
                required: true,
                message: "Please select your favourite colors!",
                type: "array",
              },
            ]}
          >
            <Select
              mode="multiple"
              placeholder="Please select favourite colors"
            >
              <Option value="red">Red</Option>
              <Option value="green">Green</Option>
              <Option value="blue">Blue</Option>
            </Select>
          </Form.Item>
        </Col>
      </Row>

      <Row gutter={[8, 8]}>
        <Col span={12}>
          <Form.Item name="range-picker" label="RangePicker" {...rangeConfig}>
            <RangePicker />
          </Form.Item>
        </Col>

        <Col span={12}>
          <Form.Item name="time-picker" label="TimePicker" {...config}>
            <TimePicker />
          </Form.Item>
        </Col>
      </Row>

      <Row gutter={[8, 8]}>
        <Col span={12}>
          <Form.Item name="slider" label="Slider">
            <Slider
              marks={{
                0: "A",
                20: "B",
                40: "C",
                60: "D",
                80: "E",
                100: "F",
              }}
            />
          </Form.Item>
        </Col>

        <Col span={12}>
          <Form.Item
            name="radio-button"
            label="Radio.Button"
            rules={[
              {
                required: true,
                message: "Please pick an item!",
              },
            ]}
          >
            <Radio.Group>
              <Radio.Button value="a">item 1</Radio.Button>
              <Radio.Button value="b">item 2</Radio.Button>
              <Radio.Button value="c">item 3</Radio.Button>
            </Radio.Group>
          </Form.Item>
        </Col>
      </Row>

      <Row gutter={[8, 8]}>
        <Col span={12}>
          <Form.Item name="rate" label="Rate">
            <Rate allowHalf defaultValue={2.5} />
          </Form.Item>
        </Col>
      </Row>

      <Row gutter={[8, 8]}>
        <Col span={12}>
          <Form.Item label="Dragger">
            <Form.Item
              name="dragger"
              valuePropName="fileList"
              getValueFromEvent={normFile}
              noStyle
            >
              <Upload.Dragger
                name="files"
                action="/upload.do"
                listType="picture"
              >
                <p className="ant-upload-drag-icon">
                  <InboxOutlined />
                </p>
                <p className="ant-upload-text">
                  Click or drag file to this area to upload
                </p>
                <p className="ant-upload-hint">
                  Support for a single or bulk upload.
                </p>
              </Upload.Dragger>
            </Form.Item>
          </Form.Item>
        </Col>
      </Row>

      <Row gutter={[8, 8]}>
        <Col span={12}>
          <Form.Item name="switch" label="Switch" valuePropName="checked">
            <Switch />
          </Form.Item>
        </Col>
      </Row>

      <Space direction="vertical" style={{ width: "100%" }}>
        <Form.Item
          wrapperCol={{
            xs: {
              span: 24,
              offset: 0,
            },
            sm: {
              span: 12,
              offset: 2,
            },
          }}
        >
          <Button type="primary" htmlType="submit" block>
            Submit
          </Button>
        </Form.Item>
      </Space>
    </Form>
  );
};

export default UserFormData;
