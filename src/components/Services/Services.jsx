import { Row, Col, Typography, Card, Button, Space } from "antd";
import {
  CodeOutlined,
  ApiOutlined,
  SafetyOutlined,
  ToolOutlined,
  RocketOutlined,
  BulbOutlined,
} from "@ant-design/icons";
import "./Services.css";

const { Title, Paragraph } = Typography;

const SERVICES = [
  {
    icon: <CodeOutlined />,
    title: "Разработка под ключ",
    text: "Сайты, личные кабинеты, корпоративные системы. От идеи до запуска.",
    bullets: ["Аналитика", "UX/UI", "Frontend + Backend"],
  },
  {
    icon: <ApiOutlined />,
    title: "Интеграции и автоматизация",
    text: "Свяжем CRM/ERP/BI, настроим обмен данными и уберем ручные операции.",
    bullets: ["API", "Синхронизация", "Автоматизация процессов"],
  },
  {
    icon: <ToolOutlined />,
    title: "Поддержка и развитие",
    text: "Сопровождение, улучшения, стабильность и понятный план развития.",
    bullets: ["SLA", "Мониторинг", "Улучшения по метрикам"],
  },
  {
    icon: <BulbOutlined />,
    title: "Технический консалтинг",
    text: "Аудит, архитектура, планирование и помощь командам на сложных этапах.",
    bullets: ["Аудит", "Архитектура", "Оптимизация"],
  },
  {
    icon: <SafetyOutlined />,
    title: "Безопасность и надежность",
    text: "Базовая безопасность, резервирование и контроль доступа.",
    bullets: ["Роли/права", "Бэкапы", "Наблюдаемость"],
  },
  {
    icon: <RocketOutlined />,
    title: "Прототипирование",
    text: "Быстро проверим идею: кликабельный прототип и понятный scope работ.",
    bullets: ["MVP", "Wireframes", "Roadmap"],
  },
];

export default function Services() {
  return (
    <section className="servicesAntd" id="services">
      <div className="servicesAntd__container">
        <div className="servicesAntd__head">
          <div>
            <p className="servicesAntd__kicker">Что мы делаем</p>
            <Title level={2} className="servicesAntd__title">
              Услуги Technorium
            </Title>
            <Paragraph className="servicesAntd__subtitle">
              Мы сопровождаем проект на всех этапах — от идеи и оценки до
              внедрения и дальнейшей поддержки.
            </Paragraph>
          </div>
        </div>

        <Row gutter={[16, 16]}>
          {SERVICES.map((s) => (
            <Col key={s.title} xs={24} sm={12} lg={8}>
              <Card className="servicesAntd__card" hoverable>
                <div className="servicesAntd__cardTop">
                  <div className="servicesAntd__icon">{s.icon}</div>
                  <div className="servicesAntd__cardTitle">{s.title}</div>
                </div>

                <div className="servicesAntd__cardText">{s.text}</div>

                <ul className="servicesAntd__list">
                  {s.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </section>
  );
}
