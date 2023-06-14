import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { Avatar, Collapse } from "@mui/material";
import { useState } from "react";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { AgregarProducto } from "@/components/Agregar Producto";
import { AdministrarProductos } from "@/components/AdministrarProductos";
import Precios from "@/components/Precios";
import Categorias from "@/components/Categorias";
import { Ventaminorista } from "@/components/VentaMinorista";
import { VentaMayorista } from "@/components/VentaMayorista";
import Ventas from "@/components/Ventas";

const drawerWidth = 240;

export default function PermanentDrawerLeft() {
  const [menu, setMenu] = useState<String>();
  const [open, setOpen] = useState<boolean>(true);
  const [ventas, setVentas] = useState<boolean>(true);

  const HandleMenu = (text: string) => {
    setMenu(text);
  };

  const handleClick = () => {
    setOpen(!open);
  };
  const handleClickVentas = () => {
    setVentas(!ventas);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        // position="fixed"
        sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}
      >
        <Toolbar>
          <Avatar
            src="/zafira-png.png"
            variant="rounded"
            sx={{ width: 50, height: 50 }}
          />
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Toolbar />
        <Divider />
        <List
          sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
        >
          <ListItemButton onClick={handleClick}>
            <ListItemText primary="Producto" />
            {open ? <ExpandLessIcon /> : <ExpandMoreIcon />}
          </ListItemButton>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItemButton onClick={()=>HandleMenu('Agregar Producto')} sx={{ pl: 4 }}>
                <ListItemText primary="Agregar Producto" />
              </ListItemButton>
              <ListItemButton onClick={()=>HandleMenu('Administrar Producto')} sx={{ pl: 4 }}>
                <ListItemText primary="Administrar Productos" />
              </ListItemButton>
            </List>
          </Collapse>

          <List>
            <ListItemButton onClick={()=>HandleMenu('Precios')}>
              <ListItemText primary="Precios" />
            </ListItemButton>
          </List>

          <List>
            <ListItemButton onClick={()=>HandleMenu('Categorias')}>
              <ListItemText primary="Categorias" />
            </ListItemButton>
          </List>

          <ListItemButton onClick={handleClickVentas}>
            <ListItemText primary="Ventas" />
            {ventas ? <ExpandLessIcon /> : <ExpandMoreIcon />}
          </ListItemButton>
          <Collapse in={ventas} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItemButton onClick={()=>HandleMenu('Venta minorista')} sx={{ pl: 4 }}>
                <ListItemText primary="Venta minorista" />
              </ListItemButton>
              <ListItemButton onClick={()=>HandleMenu('Venta mayorista')} sx={{ pl: 4 }}>
                <ListItemText primary="Venta mayorista" />
              </ListItemButton>
            </List>
          </Collapse>
        </List>
      </Drawer>
      <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: "background.default", p: 3 }}
      >
        <Toolbar />
        {menu === 'Agregar Producto' && <AgregarProducto/>}
        {menu === 'Administrar Producto' && <AdministrarProductos/>}
        {menu === 'Precios' && <Precios/>}
        {menu === 'Categorias' && <Categorias/>}
        {menu === 'Venta mayorista' && <VentaMayorista/>}
        {menu === 'Venta minorista' && <Ventaminorista/>}
      </Box>
    </Box>
  );
}
