import { useContext } from "react"
import { dataContext } from "../../Contexts/CartContext"
import { Link } from "react-router-dom"

const User = () => {

    const {inputNombre, setInputNombre, inputApellido, setInputApellido, inputEmail, setInputEmail,
            inputDireccion, setInputDireccion, inputPais, setInputPais, inputProvincia, setInputProvincia, 
            inputCodigoPostal, setInputCodigoPostal, inputPiso, setInputPiso, inputDepartamento, setInputDepartamento} = useContext(dataContext)

    console.log(inputNombre)


  return (
    <div className="container">

        {/*datos usuario*/}
        <div className="mb-3">
            <label for="formGroupExampleInput" className="form-label">Nombre Completo</label>
            <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Nombre Completo" onChange={(e) => setInputNombre(e.target.value)} value={inputNombre}/>
        </div>
        <div className="mb-3">
            <label for="formGroupExampleInput2" className="form-label">Apellido</label>
            <input type="text" className="form-control" id="formGroupExampleInput2" placeholder="Apellido" onChange={(e) => setInputApellido(e.target.value)} value={inputApellido}/>
        </div>

        <form className="row g-3">
            <div className="col-12">
                <label for="inputEmail4" className="form-label">Correo Electronico</label>
                <input type="email" className="form-control" id="inputEmail4" onChange={(e) => setInputEmail(e.target.value)} value={inputEmail}/>
            </div>
            
            <div className="col-12">
                <label for="inputAddress" className="form-label">Direccion</label>
                <input type="text" className="form-control" id="inputAddress" placeholder="Direccion" onChange={(e) => setInputDireccion(e.target.value)} value={inputDireccion}/>
            </div>

            <div class="col-sm-6">
                <label for="firstName" class="form-label">Piso</label>
                <input type="text" class="form-control" id="firstName" placeholder="" required onChange={(e) => setInputPiso(e.target.value)} value={inputPiso}/>
                <div class="invalid-feedback">
                    El Piso ingresado no es Valido.
                </div>
            </div>
                    
            <div class="col-sm-6">
                <label for="lastName" class="form-label">Departamento</label>
                <input type="text" class="form-control" id="lastName" placeholder="" required onChange={(e) => setInputDepartamento(e.target.value)} value={inputDepartamento}/>
                <div class="invalid-feedback">
                    El Departamento ingresado no es Valido.
                </div>
            </div>
            
            <div className="col-md-6">
                <label for="inputPais" className="form-label">Pais</label>
                <select id="inputPais" className="form-select" onChange={(e) => setInputPais(e.target.value)} value={inputPais}>
                    <option selected>-</option>
                    <option>Argentina</option>
                    <option>Uruguay</option>
                    <option>Bolivia</option>
                    <option>Brasil</option>
                    <option>Chile</option>
                </select>
            </div>
            <div className="col-md-4">
                <label for="inputProvincia" className="form-label">Provincia</label>
                <input id="inputProvincia" className="form-control" placeholder="Provincia" onChange={(e) => setInputProvincia(e.target.value)} value={inputProvincia}/>
                {/*<option>-</option>
                    <opcion>Buenos Aires</opcion>
                    <opcion>Ciudad Autónoma de Buenos Aires</opcion>
                    <opcion>Catamarca</opcion>
                    <opcion>Chaco</opcion>
                    <opcion>Chubut</opcion>
                    <opcion>Córdoba</opcion>
                    <opcion>Corrientes</opcion>
                    <opcion>Entre Ríos</opcion>
                    <opcion>Formosa</opcion>
                    <opcion>Jujuy</opcion>
                    <opcion>La Pampa</opcion>
                    <opcion>La Rioja</opcion>
                    <opcion>Mendoza</opcion>
                    <opcion>Misiones</opcion>
                    <opcion>Neuquén</opcion>
                    <opcion>Río Negro</opcion>
                    <opcion>Salta</opcion>
                    <opcion>San Juan</opcion>
                    <opcion>San Luis</opcion>
                    <opcion>Santa Cruz</opcion>
                    <opcion>Santa Fe</opcion>
                    <opcion>Santiago del Estero</opcion>
                    <opcion>Tierra del Fuego, Antártida e Islas del Atlántico Sur</opcion>
                    <opcion>Tucumán</opcion>
                </select>*/}
            </div>
            <div className="col-md-2">
                <label for="inputZip" className="form-label">Codigo Postal</label>
                <input type="text" className="form-control" id="inputZip" onChange={(e) => setInputCodigoPostal(e.target.value)} value={inputCodigoPostal}/>
            </div>

            <Link to={"/pedido"}>
                <div className="col-12">
                    <button type="submit" className="btn btn-primary"  style={{width: '160px'}}>Validar</button>
                </div>
            </Link>
            
            
        </form>


    </div>
    )
}

export default User