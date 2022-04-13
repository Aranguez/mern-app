import { FC } from "react";

import styled from "styled-components";

import Logo from "assets/logo.svg";
import Dashboard from "assets/icons/sidebar/Dashboard.svg";
import Check from "assets/icons/sidebar/Check.svg";
import Settings from "assets/icons/sidebar/Settings.svg";
import Calendar from "assets/icons/sidebar/Calendar.svg";
import People from "assets/icons/sidebar/People.svg";
import Mail from "assets/icons/sidebar/Mail.svg";

const Sidebar: FC = () => {
  return (
    <$Wrapper>
      <$ImageWrapper>
        <img src={Logo} alt="task-go-logo" width={140} />
      </$ImageWrapper>
      <$List>
        <$Item>
          <$Link href="#">
            <img src={Dashboard} alt="dashboard-icon" width={20} />
            <span>Dashboard</span>
          </$Link>
        </$Item>
        <$Item $isActive>
          <$Link $isActive href="#">
            <img src={Check} alt="dashboard-icon" width={20} />
            <span>Tareas</span>
          </$Link>
        </$Item>
        <$Item>
          <$Link href="#">
            <img src={Calendar} alt="dashboard-icon" width={18} />{" "}
            <span>Calendario</span>
          </$Link>
        </$Item>
        <$Item>
          <$Link href="#">
            <img src={Mail} alt="dashboard-icon" width={22} />
            <span>Mensajes</span>
          </$Link>
        </$Item>
        <$Item>
          <$Link href="#">
            <img src={People} alt="dashboard-icon" width={22} />
            <span>Team</span>
          </$Link>
        </$Item>
        <$Item>
          <$Link href="#">
            <img src={Settings} alt="dashboard-icon" width={22} />
            <span>Configuración</span>
          </$Link>
        </$Item>
      </$List>
    </$Wrapper>
  );
};

const $Wrapper = styled.div({
  display: "inline-block",
  padding: 29,
  width: 282,
  height: 1024,
  background: "#FFFFFF",
  boxShadow: "1px 4px 10px rgba(0, 0, 0, 0.07)",
});

const $List = styled.ul({
  listStyle: "none",
});

const $Item = styled.li<{ $isActive?: boolean }>(({ $isActive }) => ({
  width: 224,
  borderRadius: 10,
  padding: "10px 20px",
  backgroundColor: $isActive ? "#F4F5F8" : "transparent",
  fontSize: 14,
  lineHeight: "21px",
  fontWeight: $isActive ? "600" : "400",
  marginBottom: 30,
}));

const $Link = styled.a<{ $isActive?: boolean }>(({ $isActive }) => ({
  display: "flex",
  alignItems: "center",
  color: $isActive ? "#5D68FE" : "#1C1C1C",
  textDecoration: "none",
  "> span": {
    marginLeft: 11,
  },
}));

const $ImageWrapper = styled.div({
  textAlign: "center",
  marginBottom: 100,
});

export default Sidebar;
