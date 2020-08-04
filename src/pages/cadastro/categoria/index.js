import React, { useState } from 'react';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';

function CadastroCategoria() {
  const initialValues = {
    name: '',
    description: '',
    color: '#000000',
  }

  const [categorias, setCategorias] =  useState([]);  
  const [values, setValues] = useState(initialValues);

  function setValue(key, val){
    setValues({ ...values, [key]: val});
  }

  function handlerChangeInput(event) {
    setValue(
      event.target.getAttribute('name'),
      event.target.value
    );
  }

  return (
      <PageDefault>
        <h1>Cadastro de Categoria: { values.name }</h1>

        <form
            onSubmit={function handlerSubmit(infoDoEvento) {
              infoDoEvento.preventDefault();
              setCategorias([...categorias, values]);
              setValues(initialValues);
            }}            
        >

          <FormField
            label="Nome da Categoria" 
            type="text"
            name="name"
            value={values.name}            
            onChange={handlerChangeInput}
          />

          <div>
            <label>
              Descrição:
              < textarea type="text" 
                value={values.description}
                name="description"
                onChange={handlerChangeInput}
              />
            </label>
          </div>

          <FormField
            label="Cor"  
            type="color"
            name="color"
            value={values.color}            
            onChange={handlerChangeInput}
          />

          <button> Cadastrar </button>
        </form>

        <ul>
          {categorias.map((categoria, index) => {
            return (
              <li key={`${categoria}${index}`}>
                {categoria.name}
              </li>
            )
          })}
        </ul>
        
      </PageDefault>
    )
}

export default CadastroCategoria;