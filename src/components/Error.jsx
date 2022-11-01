

function Error({mensaje}) {
  return (
    <div
            className="uppercase  bg-red-800
      font-bold text-sm rounded-sm text-center text-white p-3"
          >
            <p>{mensaje}</p>
          </div>
  )
}

export default Error