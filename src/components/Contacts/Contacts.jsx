import { Row, Col, Typography, Card, Space } from "antd";
import {
  PhoneOutlined,
  MailOutlined,
  EnvironmentOutlined,
  ClockCircleOutlined,
} from "@ant-design/icons";
import "./Contacts.css";

const { Title, Paragraph, Text } = Typography;

export default function Contacts() {
  return (
    <section className="contacts" id="contacts">
      <div className="contacts__container">
        <Row gutter={[32, 32]} align="middle">
          <Col xs={24} lg={10}>
            <p className="contacts__kicker">Контакты</p>

            <Title level={2} className="contacts__title">
              Свяжитесь с Technorium
            </Title>

            <Paragraph className="contacts__subtitle">
              Готовы обсудить задачу, ответить на вопросы и предложить решение,
              подходящее под ваш бизнес.
            </Paragraph>

            <Space direction="vertical" size={16} className="contacts__list">
              <div className="contacts__item">
                <PhoneOutlined />
                <div>
                  <Text strong>Телефон</Text>
                  <br />
                  <a href="tel:+77001234567">+7 (700) 123-45-67</a>
                </div>
              </div>

              <div className="contacts__item">
                <MailOutlined />
                <div>
                  <Text strong>Email</Text>
                  <br />
                  <a href="mailto:info@technorium.kz">info@technorium.kz</a>
                </div>
              </div>

              <div className="contacts__item">
                <EnvironmentOutlined />
                <div>
                  <Text strong>Город</Text>
                  <br />
                  <Text>Казахстан, Астана</Text>
                </div>
              </div>

              <div className="contacts__item">
                <ClockCircleOutlined />
                <div>
                  <Text strong>Время работы</Text>
                  <br />
                  <Text>Пн–Пт, 09:00–18:00</Text>
                </div>
              </div>
            </Space>
          </Col>

          <Col xs={24} lg={14}>
            <Card className="contacts__card" bordered={false}>
              <Title level={4} className="contacts__cardTitle">
                Работаем с бизнесом
              </Title>

              <Paragraph className="contacts__cardText">
                Мы ценим прозрачность, понятные договоренности и долгосрочное
                сотрудничество. Если у вас есть задача — свяжитесь с нами
                удобным способом.
              </Paragraph>

              <div className="contacts__cta">
                <a href="tel:+77001234567" className="contacts__ctaBtn">
                  Позвонить
                </a>
                <a
                  href="mailto:info@technorium.kz"
                  className="contacts__ctaBtn contacts__ctaBtn--ghost"
                >
                  Написать письмо
                </a>
              </div>
            </Card>
          </Col>
        </Row>
      </div>
    </section>
  );
}
