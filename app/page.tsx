import Box from "@/components/Box";

export default function Home() {
  return (
    <div className="h-full">
      <Box className="w-[300px] h-16 rounded-md">Conteudo inicial</Box>
      <Box className="h-[400px] overflow-y-auto mt-1 rounded-md">
        Conteúdo secundario
      </Box>
      <Box className="mt-1 h-48">Conteúdo final</Box>
    </div>
  );
}
