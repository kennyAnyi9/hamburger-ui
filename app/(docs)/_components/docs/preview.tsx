export default function Preview() {
  return (
    <div className="flex justify-center items-center h-screen gap-5 w-full thin_border rounded-md">
      <div className="relative w-[300px] h-[550px] bg-gray-900 rounded-[40px] overflow-hidden shadow-2xl">
        <div className="absolute inset-0 flex justify-center items-center"></div>
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 w-20 h-2 bg-gray-500 rounded-full" />
      </div>
    </div>
  );
}
