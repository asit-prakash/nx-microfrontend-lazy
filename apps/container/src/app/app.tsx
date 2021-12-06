import MicroFrontend from "./MicroFrontEnd";

const Micro = () => (
  <MicroFrontend name="Micro" host={'http://localhost:3001'} />
);

const app = () => {
  return (
    <div>
      Container App
      <Micro />
    </div>
  )
}

export default app
