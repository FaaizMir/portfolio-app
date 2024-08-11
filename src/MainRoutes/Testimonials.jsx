
const Testimonials = () => {
  return (
    <div className="container mx-auto">
  <h1 className="text-center text-3xl font-bold mb-4 text-red-500">Testimonials</h1>
  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
    <div className="flex flex-col items-center">
      <iframe width="400" height="315" src="https://www.youtube.com/embed/brsvyN7SjuA?si=af9KK7GZiHuVlhXJ" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      <p className="text-center mt-4 font-semibold">Maurice</p>
    </div>
    <div className="flex flex-col items-center">
      <iframe width="400" height="315" src="https://www.youtube.com/embed/A_EY-5U5bDA?si=pBLs4jLztB_wVzQ4" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      <p className="text-center mt-4 font-semibold">Ahsan</p>
    </div>
    <div className="flex flex-col items-center">
      <iframe width="400" height="315" src="https://youtube.com/embed/mjz4fXhnpm0?si=Vf8IEt3DU0Nckm4m" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      <p className="text-center mt-4 font-semibold">Gufran</p>
    </div>
  </div>
</div>

  

  )
}

export default Testimonials
