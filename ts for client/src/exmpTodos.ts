//sımdı ben burda fetch'e tıp destegı veremıyorum gidip böyle demem lazım   const json : TodoExmp = await response.json(); ama bunu nasıl otomatıklestırebılrız fetch üzerine geldıgımızde tipler tanımlamış ordan yola çıkarak denemeFnType fonksıyonu gibi yapacaz cunku fetch'e bız tür tanımlaması veremıyoruz onun kendınsın tür tanımlamasını böyle kulanabılrız
export const denemeFn = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  const json = await response.json();
  console.log(json);
};

export async function denemeFnType<T extends object | any[]>(
  input: RequestInfo,
  init?: RequestInit
) {
  const response = await fetch(input, init); //fetch'ın tanımladıgı tıpı verdık
  const json: T = await response.json(); //burdada json ne turde olcagını verdık ve donus tıpını belırlemıs olduk aslında
  return json;
}
