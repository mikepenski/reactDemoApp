const CardProduct = (props) => {

    return <div className="card card-product">
                <div className="card-body">
                    <div className="image">
                        <img src={props.imgURL ? props.imgURL : ''} />
                    </div>

                      <strong className="mb-0">{props.title ? props.title : 'Lorem Ipsum'}</strong>

                      <div className="info py-1">

                          <span className="description">
                              {props.description ? props.description : '' }
                          </span>

                          <span className="title d-block">
                            {props.price ? props.price + "$" : 'price not set'}
                          </span>

                      </div>

                      {props.button ? <a href="#" className="btn btn-primary rounded-pill px-5">Buy now</a> : ''}
                 
                    {/*
                    <div className="Container" dangerouslySetInnerHTML={{__html: button}}></div>
                    */}

                </div>

           </div>
           
    }
    
  
export default CardProduct;
