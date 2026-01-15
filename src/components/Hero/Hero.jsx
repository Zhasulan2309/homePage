import { Row, Col, Typography, Button, Space, Card, Statistic } from "antd";
import { ArrowRightOutlined, ThunderboltOutlined } from "@ant-design/icons";
import "./Hero.css";

const { Title, Paragraph, Text } = Typography;

export default function Hero() {
  return (
    <section className="heroAntd" id="top">
      <div className="heroAntd__container">
        <Row gutter={[24, 24]} align="middle">
          <Col xs={24} lg={14}>
            <div className="heroAntd__kicker">
              <ThunderboltOutlined />
              <span>Technorium • цифровые решения</span>
            </div>

            <Title level={1} className="heroAntd__title">
              <span className="heroAntd__brand">Technorium</span>
              <br />
              технологии для{" "}
              <span className="heroAntd__accent">роста бизнеса</span>
            </Title>

            <Paragraph className="heroAntd__subtitle">
              Мы разрабатываем цифровые решения, которые помогают бизнесу
              работать быстрее, прозрачнее и эффективнее.
            </Paragraph>

            <Row gutter={[12, 12]} className="heroAntd__stats">
              <Col xs={12} sm={8}>
                <Card size="small" className="heroAntd__statCard">
                  <Statistic title="лет опыта" value="10+" />
                </Card>
              </Col>
              <Col xs={12} sm={8}>
                <Card size="small" className="heroAntd__statCard">
                  <Statistic title="поддержка" value="24/7" />
                </Card>
              </Col>
              <Col xs={24} sm={8}>
                <Card size="small" className="heroAntd__statCard">
                  <Statistic title="формат" value="End-to-end" />
                </Card>
              </Col>
            </Row>

            <Text className="heroAntd__note">
              Понимаем задачи бизнеса и превращаем их в работающие решения
            </Text>
          </Col>

          <Col xs={24} lg={10}>
            <div className="heroAntd__visual">
              <Card className="heroAntd__glass" bordered={false}>
                <Title level={4} className="heroAntd__glassTitle">
                  Проект под ключ
                </Title>
                <Paragraph className="heroAntd__glassText">
                  Прозрачные этапы, понятные сроки и контроль качества на каждом
                  шаге.
                </Paragraph>
              </Card>
              <div className="heroAntd__blob" aria-hidden="true" />
            </div>
          </Col>
        </Row>
      </div>
    </section>
  );
}
