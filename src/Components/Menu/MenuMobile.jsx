import React, { useState } from "react";
import "./MenuMobile.css";
import { Drawer, Button, Menu } from "antd";
import { MenuOutlined, CloseOutlined } from "@ant-design/icons";
import { NavLink } from "react-router-dom";
import IconoEstrella from "../../IMG/Logo.svg";

export default function MenuMobile() {
  const [visible, setVisible] = useState(false);

  const showDrawer = () => {
    setVisible(true);
  };

  const closeDrawer = () => {
    setVisible(false);
  };
  return (
    <div className="menu-container-mobile">
      <div className="icon-star-mobile">
        <NavLink to="/">
          <img src={IconoEstrella} alt="Icono de una estrella" height="50px" />
        </NavLink>
      </div>
      <div>
        <button
          className="button-menu-mobile"
          type="primary"
          onClick={showDrawer}
        >
          <MenuOutlined className="icon-menu-mobile" />
        </button>
        <Drawer
          style={{
            backgroundColor: "rgba(255, 255, 255, 0.071)", // Fondo blanco translúcido
            backdropFilter: "blur(20px)",
            color: "#fff",
          }}
          closeIcon={<CloseOutlined className="custom-close-icon" />}
          width={250}
          placement="right"
          onClose={closeDrawer}
          open={visible}
        >
          <Menu mode="vertical" className="menu-options-mobile">
            <Menu.Item
              key="home"
              onClick={closeDrawer}
              style={{ color: "#fff" }}
            >
              <NavLink to="/">
                <b>00</b> Home
              </NavLink>
            </Menu.Item>
            <Menu.Item
              key="destinos"
              onClick={closeDrawer}
              style={{ color: "#fff" }}
            >
              <NavLink to="/destinos">
                <b>01</b> Destinos
              </NavLink>
            </Menu.Item>
            <Menu.Item
              key="tripulacion"
              onClick={closeDrawer}
              style={{ color: "#fff" }}
            >
              <NavLink to="/tripulacion">
                <b>02</b> Tripulación
              </NavLink>
            </Menu.Item>
            <Menu.Item
              key="tecnologia"
              onClick={closeDrawer}
              style={{ color: "#fff" }}
            >
              <NavLink to="/tecnologia">
                <b>03</b> Tecnología
              </NavLink>
            </Menu.Item>
          </Menu>
        </Drawer>
      </div>
    </div>
  );
}
