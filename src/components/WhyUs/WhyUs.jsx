import { Row, Col, Typography, Card, Statistic, Space } from "antd";
import {
  CheckCircleOutlined,
  PartitionOutlined,
  ThunderboltOutlined,
  SecurityScanOutlined,
} from "@ant-design/icons";
import "./WhyUs.css";

const { Title, Paragraph } = Typography;

const ADV = [
  {
    icon: <CheckCircleOutlined />,
    title: "Прозрачный процесс",
    text: "Фиксируем этапы, сроки и результат. Регулярные отчеты и демо.",
  },
  {
    icon: <PartitionOutlined />,
    title: "Сильная инженерия",
    text: "Чистая архитектура, масштабируемость и интеграции с существующими системами.",
  },
  {
    icon: <ThunderboltOutlined />,
    title: "Быстрый запуск",
    text: "MVP и прототипы, чтобы быстро проверить гипотезы и начать получать эффект.",
  },
  {
    icon: <SecurityScanOutlined />,
    title: "Надежность",
    text: "Базовая безопасность, мониторинг и сопровождение для стабильной работы.",
  },
];

export default function WhyUs() {
  return (
    <section className="whyUs" id="about">
      <div className="whyUs__container">
        <Row gutter={[24, 24]} align="middle">
          <Col xs={24} lg={10}>
            <p className="whyUs__kicker">Почему мы</p>
            <Title level={2} className="whyUs__title">
              Technorium. Инженерный подход к результату
            </Title>
            <Paragraph className="whyUs__subtitle">
              Мы работаем так, чтобы продукт был полезным в реальности, а не
              просто “сделанным”. Минимум шума, максимум эффекта.
            </Paragraph>

            <div className="whyUs__stats">
              <Row gutter={[12, 12]}>
                <Col xs={12}>
                  <Card size="small" className="whyUs__statCard">
                    <Statistic title="скорость реакции" value="быстро" />
                  </Card>
                </Col>
                <Col xs={12}>
                  <Card size="small" className="whyUs__statCard">
                    <Statistic title="формат" value="под ключ" />
                  </Card>
                </Col>
                <Col xs={24}>
                  <Card size="small" className="whyUs__statCard">
                    <Statistic title="подход" value="инженерный" />
                  </Card>
                </Col>
              </Row>
            </div>
          </Col>

          <Col xs={24} lg={14}>
            <Row gutter={[16, 16]}>
              {ADV.map((a) => (
                <Col key={a.title} xs={24} sm={12}>
                  <Card className="whyUs__card" hoverable>
                    <Space size={12} align="start">
                      <div className="whyUs__icon">{a.icon}</div>
                      <div>
                        <div className="whyUs__cardTitle">{a.title}</div>
                        <div className="whyUs__cardText">{a.text}</div>
                      </div>
                    </Space>
                  </Card>
                </Col>
              ))}
            </Row>

            <Card className="whyUs__banner" bordered={false}>
              <div className="whyUs__bannerTitle">Нужен быстрый старт?</div>
              <div className="whyUs__bannerText">
                Составим план работ и оценку в короткие сроки. Без лишней бюрократии.
              </div>
              <a className="whyUs__bannerBtn" href="#contacts">
                Обсудить проект
              </a>
            </Card>
          </Col>
        </Row>
      </div>
    </section>
  );
}
