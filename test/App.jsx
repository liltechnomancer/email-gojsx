
export default function App(props) {
  const Form = require("./Form").default;

  return <div className="bg-red-50 border-black" class="text-black">
    a /2
    {
      <Form className="red block" c="c1" style={{padding: '1px'}}> f {props.li ? (<>
        <ul>
          {
            props.li.map(i => (
              <li> {i} </li>
            ))
          }
        </ul>
      </>) : 'b'}</Form>
    }

    <img src="a.jpb" alt={`asdfsf"12312`} data-x={JSON.stringify({a: "`'"})}/>
    <p>{props.html}</p>
    <p dangerouslySetInnerHTML={{__html: props.html}}></p>

  </div>
}