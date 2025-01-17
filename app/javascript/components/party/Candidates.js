import React from "react";
import { Layout, Row, Col, Typography, Select, Avatar } from "antd";

const { Title, Paragraph } = Typography;
const { Option } = Select;

class Candidates extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      circle: "all"
    };
  }

  updateCircle = value => {
    const circle = value || "all";
    this.setState({ circle });
  };

  render() {
    const { circles, candidates } = this.props;
    return (
      <Layout>
        <Layout.Content className="candidates">
          <Row>
            <Col lg={17} span={24}>
              <Title level={2}>Cabeças de Lista</Title>
            </Col>
            <Col lg={7} span={24} className="candidates__circles">
              <Select
                style={{ width: "100%" }}
                placeholder="Escolha o Círculo Eleitoral"
                onChange={this.updateCircle}
              >
                {circles.map((circle, index) => (
                  <Option key={circle.value} value={circle.value}>{circle.label}</Option>
                ))}
              </Select>
            </Col>
          </Row>
          <Row className="candidates__list">
            {candidates
              .filter(
                candidate =>
                  candidate.circle.id === this.state.circle ||
                  this.state.circle === "all"
              )
              .map((candidate, index) => {
                return (
                  <Col
                    key={index}
                    span={12}
                    sm={8}
                    lg={6}
                    xl={4}
                    className="candidate"
                  >
                    <Avatar size={160} src={candidate.photo} icon="user" />
                    <Title level={3}>{candidate.name}</Title>
                    <Paragraph>{candidate.circle.name}</Paragraph>
                    <Paragraph>{candidate.biography}</Paragraph>
                  </Col>
                );
              })}
          </Row>
        </Layout.Content>
      </Layout>
    );
  }
}

export default Candidates;
