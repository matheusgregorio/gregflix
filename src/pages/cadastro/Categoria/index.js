import React, { useState } from 'react';
import PageDefault from '../../../components/PageDefault';
import { Link } from 'react-router-dom';
import FormField from '../../../components/FormField';

function CadastroCategoria() {
    const valoresIniciais = {
      nome: '',
      descricao: '',
      cor: '#000',
    }
    const[categorias, setCategoria] = useState([])
    const [values, setValues] = useState(valoresIniciais);
    
    function setValue(chave, valor) {// chave pode ser nome, descrição, etc
      setValues ({
        ...values,
        [chave]: valor,
      })
    }

    function handleChange(infosDoEvento) {
      // CapturaMudanca
      const { getAttribute, value} = infosDoEvento.target;
      setValue(
        infosDoEvento.target.getAttribute('name'), 
      value
      );
    }

    return (
      <PageDefault>
        <h1>Cadastro de Categoria: {values.nome}</h1>

        <form onSubmit={function handleSubmit(infosDoEvento){
          
          infosDoEvento.preventDefault();
          setCategoria([
            ...categorias,
            values
          ]);

          setValues(valoresIniciais)
          
        }}>

          <FormField
            label="Nome da Categoria"
            type="text"
            name="nome"
            value={values.nome}
            onChange={handleChange}
          />

          <FormField 
              label="Descrição"
              type="textarea"
              value={values.descricao}
              name="descricao"
              onChange={handleChange}
              
          />

          <FormField 
              label="Cor"
              type="color"
              value={values.cor}
              name="cor"
              onChange={handleChange}
          />
          
          <button>
            Cadastrar
          </button>
        </form>
        
        <ul>
          {categorias.map((categoria, indice) => {
            return (
              <li key={`${categoria}${indice}`}>
                {categoria.nome}
              </li>
            )
          })}
        </ul>

        <br/>
        <Link to="/">
            Ir para home
        </Link>
      </PageDefault>
    )
  }

  export default CadastroCategoria;