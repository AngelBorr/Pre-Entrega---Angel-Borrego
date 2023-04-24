import { useContext } from "react"
import style from "./pedido.module.scss"
import { dataContext } from "../../Contexts/CartContext"

const Pedido = () => {

    const { productosFirebasePedidos, precioTotal, ivaProductos, subTotal, numCar,
        inputNombre, inputApellido, inputEmail, inputDireccion, inputPais, inputProvincia,
        inputCodigoPostal, inputPiso, inputDepartamento} = useContext(dataContext)


    return (
        <div>

            <div className="bg-light" style={{display: "grid", justifyContent: "space-around", gridTemplateColumns: "60% 40%"}}>                         
                                
                    <div className="row g-5" />

                        {/* <!-- CARRITO DE COMPRAS --> */}

                        <div className="col-md-5 col-lg-4 order-md-last" style={{gridColumnStart: "2", gridColumnEnd: "3", width: "100%", padding: "40px"}}>
                            <h4 className="d-flex justify-content-between align-items-center mb-3">
                            <span className="text-primary">Carrito de Compras</span>
                            <span id="contadorPaginaCarrito" className="badge bg-primary rounded-pill">{numCar}</span>
                            </h4>
                                {/* <!-- LISTA DEL CARRITO --> */}

                            <ul id="listaCarrito" className="list-group mb-3">

                                {/* <!-- SE RELLENA CON JAVASCRIPT --> */}
                                {
                                    productosFirebasePedidos.map((producto) => (                                       
                                        <li className="list-group-item d-flex justify-content-between">
                                            <span>{producto.nombre}</span>
                                            <strong id={producto.id}>${producto.precio}</strong>
                                        </li> 
                                    ))
                                }

                            </ul>

                            <ul className="list-group mb-3">
                                <li id="codigoPromocion" class="list-group-item d-flex justify-content-between bg-light">
                                    <div className="text-success">
                                        <h6 className="my-0">Codigo Promocional</h6>
                                        <small>-</small>
                                    </div>
                                    <span className="text-success">−$0</span>
                                </li>
                                <li id="descuentos" className="list-group-item d-flex justify-content-between bg-light">
                                    <div class="text-success">
                                        <h6 class="my-0">Descuentos</h6>
                                        <small>-</small>
                                    </div>
                                    <span class="text-success">−$0</span>
                                </li>
                                <li className="list-group-item d-flex justify-content-between">
                                    <span>Iva ($)</span>
                                    <strong id="iva">${ivaProductos}</strong>
                                </li>
                                <li className="list-group-item d-flex justify-content-between">
                                    <span>Total ($)</span>
                                    <strong id="precioTotal">${precioTotal}</strong>
                                </li>
                            </ul>
                    
                            <form className="card p-2">
                                <div class="input-group">
                                    <input type="text" class="form-control" placeholder="Codigo Descuento"/>
                                    <button type="submit" class="btn btn-secondary">Canjear</button>
                                </div>
                            </form>

                            <div className="list-group mb-3 btnFinalizarCompra" style={{marginTop: "15px"}}>
                                
                                <button type="button" id="btnFinalizarCompra" class="btn btn-primary">Finalizar Compra</button>
                                <div id="alertaCompra">

                                </div>
                                                        
                            </div>

                            
                        </div>

                        <div className="col-md-7 col-lg-8" style={{gridColumnStart: "0", gridColumnEnd: "2", width: "100%", padding: "40px"}}>
                            <h4 className="mb-3">Direccion de Envio</h4>
                            <form className="needs-validation" novalidate>
                                <div className="row g-3">
                                    <div class="col-sm-6">
                                        <label for="firstName" class="form-label">Nombre</label>
                                        <input type="text" class="form-control" id="Nombre" placeholder="Nombre" value={inputNombre} required/>
                                        <div class="invalid-feedback">
                                            El Nombre ingresado no es Valido.
                                        </div>
                                    </div>
                    
                                    <div class="col-sm-6">
                                        <label for="lastName" class="form-label">Apellido</label>
                                        <input type="text" class="form-control" id="Apellido" placeholder="Apellido" value={inputApellido} required/>
                                        <div class="invalid-feedback">
                                            El Apellido ingresado no es Valido.
                                        </div>
                                    </div>
                    
                                    <div class="col-12">
                                        <label for="username" class="form-label">E-Mail Registrado (Usuario)</label>
                                        <div class="input-group has-validation">
                                            <span class="input-group-text">@</span>
                                            <input type="text" class="form-control" id="username" placeholder="Correo Electronico" required value={inputEmail}/>
                                            <div class="invalid-feedback">
                                                El E-mail ingresado no es Valido.
                                            </div>
                                        </div>
                                    </div>
                    
                                    <div class="col-12">
                                        <label for="address" class="form-label">Direccion</label>
                                        <input type="text" class="form-control" id="address" placeholder="Ejemplo 1234" required value={inputDireccion}/>
                                        <div class="invalid-feedback">
                                            Por favor introduzca su direccion de envio.
                                        </div>
                                    </div>

                                    <div class="col-sm-6">
                                        <label for="firstName" class="form-label">Piso</label>
                                        <input type="text" class="form-control" id="firstName" placeholder="" value={inputPiso} required/>
                                        <div class="invalid-feedback">
                                            El Piso ingresado no es Valido.
                                        </div>
                                    </div>
                    
                                    <div class="col-sm-6">
                                        <label for="lastName" class="form-label">Departamento</label>
                                        <input type="text" class="form-control" id="lastName" placeholder="" value={inputDepartamento} required/>
                                        <div class="invalid-feedback">
                                            El Departamento ingresado no es Valido.
                                        </div>
                                    </div>
                    
                                    <div class="col-md-5">
                                        <label for="Pais" class="form-label">Pais</label>
                                        <input type="text" class="form-control" id="lastName" placeholder="" value={inputPais} required/>
                                        {/* <select class="form-select" id="Pais" required>
                                            <option value={inputPais}></option>
                                            <option>Argentina</option>
                                            <option>Bolivia</option>
                                            <option>Brasil</option>
                                            <option>Chile</option>
                                            <option>Paraguay</option>
                                            <option>Uruguay</option>
                                        </select> */}
                                        <div class="invalid-feedback">
                                            Seleccione un país válido.
                                        </div>
                                    </div>

                                    <div class="col-md-4">
                                        <label for="provincias" class="form-label">Provincia</label>
                                        <input type="text" class="form-control" id="lastName" placeholder="" value={inputProvincia} required/>
                                        {/* <select class="form-select" id="provincias" required>
                                            <option value={inputProvincia}></option>
                                            <option>Buenos Aires</option>
                                            <option>Ciudad Autónoma de Buenos Aires</option>
                                            <option>Catamarca</option>
                                            <option>Chaco</option>
                                            <option>Chubut</option>
                                            <option>Córdoba</option>
                                            <option>Corrientes</option>
                                            <option>Entre Ríos</option>
                                            <option>Formosa</option>
                                            <option>Jujuy</option>
                                            <option>La Pampa</option>
                                            <option>La Rioja</option>
                                            <option>Mendoza</option>
                                            <option>Misiones</option>
                                            <option>Neuquén</option>
                                            <option>Río Negro</option>
                                            <option>Salta</option>
                                            <option>San Juan</option>
                                            <option>San Luis</option>
                                            <option>Santa Cruz</option>
                                            <option>Santa Fe</option>
                                            <option>Santiago del Estero</option>
                                            <option>Tierra del Fuego</option>
                                            <option>Tucumán</option>
                                        </select> */}
                                        <div class="invalid-feedback">
                                            Seleccione una Provincia válido.
                                        </div>
                                    </div>
                    
                                    <div class="col-md-3">
                                        <label for="Cpostal" class="form-label">C. Postal</label>
                                        <input type="text" class="form-control" id="Cpostal" placeholder="CP" required value={inputCodigoPostal}/>
                                        <div class="invalid-feedback">
                                            Ingrese un Codigo Postal Valido.
                                        </div>
                                    </div>
                                </div>
                    
                                <hr className="my-4"/>
                    
                                <div className="form-check">
                                    <input type="checkbox" class="form-check-input" id="same-address"/>
                                    <label class="form-check-label" for="same-address">La dirección de envío es la misma que mi dirección de facturación.</label>
                                </div>
                        
                                <div className="form-check">
                                    <input type="checkbox" class="form-check-input" id="save-info"/>
                                    <label class="form-check-label" for="save-info">¿Desea que guardemos esta información para la próximas que regreses?</label>
                                </div>
                        
                                <hr className="my-4"/>
                        
                                

                            </form>
                        </div>
                    </div>                       
            </div>
        

    )
}

export default Pedido