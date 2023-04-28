import {
  Alert,
  Button,
  Checkbox,
  Divider,
  FormControl,
  FormControlLabel,
  FormGroup,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  TextField,
} from "@mui/material";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import React, { FC, useEffect, useState } from "react";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import { Field, Form, Formik } from "formik";
import { FormikValues, FormikHelpers } from "formik/dist/types";
import { CategoriaProps } from "./Categorias";
import { CategoriaServices } from "@/services/CategoriaServices";

export const AgregarProducto: FC = () => {
  const [selectedFile, setSelectedFile] = useState<File[]>([]);
  const [selectedFileBase64, setSelectedFileBase64] = useState<string[]>([]);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      const newFiles = Array.from(event.target.files);
      setSelectedFile((prevFiles) => [...prevFiles, ...newFiles]);
    }
  };

  useEffect(() => {
    selectedFile.forEach((file) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = function () {
        const base64 = reader.result;
        const selectedFileBase64 =
          typeof base64 === "string" ? base64.split(",") : [];
        setSelectedFileBase64((prevBase64) => [
          ...prevBase64,
          selectedFileBase64[1],
        ]);
      };
    });
  }, [selectedFile]);

  const limitFilesSelected = 6;
  selectedFile.splice(limitFilesSelected);

  const [categoria, setCategoria] = useState<CategoriaProps[]>([
    { categoria: "", __v: 0, _id: "" },
  ]);

  const Categoria = () => {
    CategoriaServices.search()
      .then((res) => {
        setCategoria(res.data);
      })
      .catch((err) => alert("hubo un error"));
  };

  const initialValues = {
    selectedFileBase64: selectedFileBase64,
    Name: "",
    Price: "",
    Maxprice: "",
    Description: "",
    Categoria: "",
    Filamento: false,
    Gema: false,
    Terciopelo: false,
  };
  useEffect(() => Categoria(), []);

  return (
    <>
      <Formik
        initialValues={initialValues}
        onSubmit={(values) => {
          console.log("values", values);
        }}
      >
        <Box>
          <Typography variant="h5" fontFamily="serif" gutterBottom>
            Agregar Producto
          </Typography>

          <Paper elevation={3} sx={{ width: "100%", p: 2 }}>
            <Stack direction="row" spacing={3}>
              <Stack direction="column" spacing={2}>
                <Button
                  variant="contained"
                  component="label"
                  disabled={selectedFile.length === 6}
                  sx={{ width: 64 }}
                >
                  <AddPhotoAlternateIcon />
                  <input
                    type="file"
                    multiple
                    hidden
                    style={{ width: 200, height: 150 }}
                    onChange={handleFileChange}
                    accept="image/png, image/jpeg"
                  />
                </Button>

                <Stack direction="row" spacing={2}>
                  {selectedFile.length > 0 &&
                    selectedFile.map((file, index) => (
                      <Stack direction="row">
                        <Paper key={index}>
                          <img
                            src={URL.createObjectURL(file)}
                            alt={file.name}
                            width="200"
                          />
                        </Paper>
                      </Stack>
                    ))}
                </Stack>
              </Stack>
            </Stack>

            <Form>
              <Stack direction="column" mt={2}>
                <Field
                  fullWidth
                  id="Name"
                  name="Name"
                  placeholder="nombre del producto"
                  as={TextField}
                  label="nombre del producto"
                  type="string"
                  color="primary"
                />
              </Stack>
              <Field
                name="selectedFileBase64"
                value={initialValues.selectedFileBase64}
              />
              <Stack direction="column" mt={2}>
                <Field
                  fullWidth
                  id="Description"
                  name="Description"
                  placeholder="Descripcion"
                  as={TextField}
                  label="Descripcion"
                  type="string"
                  color="primary"
                />
              </Stack>
              <Stack
                direction="row"
                mt={2}
                alignItems="center"
                justifyContent="space-between "
              >
                <Stack direction="column" sx={{ width: "100%" }}>
                  <Field
                    fullWidth
                    id="Price"
                    name="Price"
                    as={TextField}
                    label="Precio"
                    type="string"
                    color="primary"
                  />
                </Stack>
                <Stack direction="column" ml={2} sx={{ width: "100%" }}>
                  <Field
                    fullWidth
                    id="Maxprice"
                    name="Maxprice"
                    as={TextField}
                    label="Precio Mayor"
                    type="string"
                    color="primary"
                  />
                </Stack>
              </Stack>
              <Stack direction="column">
                <Field
                  id="Filamento"
                  name="Filamento"
                  placeholder="Filamento"
                  as={Checkbox}
                  type="Checkbox"
                  label="Filamento"
                  labelId="Filamento"
                >
                  <Checkbox value={"Filamento"} />
                </Field>
                <Field
                  id="Gema"
                  name="Gema"
                  placeholder="Gema"
                  as={Checkbox}
                  type="Checkbox"
                  label="Gema"
                  labelId="Gema"
                >
                  <Checkbox value={"Gema"} />
                </Field>
                <Field
                  id="Terciopelo"
                  name="Terciopelo"
                  placeholder="Terciopelo"
                  as={Checkbox}
                  type="Checkbox"
                  label="Terciopelo"
                  labelId="Terciopelo"
                >
                  <Checkbox value={"Terciopelo"} />
                </Field>
                <Field
                  id="Categoria"
                  name="Categoria"
                  placeholder="Categoria"
                  as={Select}
                  type="select"
                  label="Categoria"
                  labelId="Categoria"
                >
                  {categoria.map((cat) => (
                    <MenuItem value={cat.categoria}>{cat.categoria}</MenuItem>
                  ))}
                </Field>

                <Button type="submit">Agregar Producto</Button>
              </Stack>
            </Form>
          </Paper>
        </Box>
      </Formik>
    </>
  );
};
