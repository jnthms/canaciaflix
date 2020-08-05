import React, { useState } from 'react';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';

function CadastroCategoria() {
  const initialValues = {
    name: '',
    description: '',
    color: '#000000',
  };

  const [categorias, setCategorias] = useState([]);
  const [values, setValues] = useState(initialValues);

  function setValue(key, val) {
    setValues({ ...values, [key]: val });
  }

  function handlerChangeInput(event) {
    setValue(
      event.target.getAttribute('name'),
      event.target.value,
    );
  }

  return (
    <PageDefault>
      <h1>
        Cadastro de Categoria:
        { values.name }
      </h1>

      <form
        onSubmit={function handlerSubmit(infoDoEvento) {
          infoDoEvento.preventDefault();
          setCategorias([...categorias, values]);
          setValues(initialValues);
        }}
      >

        <FormField
          label="Nome da Categoria"
          name="name"
          value={values.name}
          onChange={handlerChangeInput}
        />

        <FormField
          label="Descrição:"
          type="textarea"
          name="description"
          value={values.description}
          onChange={handlerChangeInput}
        />

        <FormField
          label="Cor"
          type="color"
          name="color"
          value={values.color}
          onChange={handlerChangeInput}
        />

        <Button> Cadastrar </Button>
      </form>

      <ul>
        {categorias.map((categoria, index) => (
          <li key={`${categoria}${index}`}>
            {categoria.name}
          </li>
        ))}
      </ul>

    </PageDefault>
  );
}

export default CadastroCategoria;
