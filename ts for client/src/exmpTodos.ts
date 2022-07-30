interface TodoExm {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}
//sımdı ben burda fetch'e tıp destegı veremıyorum gidip böyle demem lazım   const json : TodoExmp = await response.json(); ama bunu nasıl otomatıklestırebılrız fetch üzerine geldıgımızde tipler tanımlamış ordan yola çıkarak denemeFnType fonksıyonu gibi yapacaz cunku fetch'e bız tür tanımlaması veremıyoruz onun kendınsın tür tanımlamasını böyle kulanabılrız
export const denemeFn = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  const json = await response.json();
  console.log(json);
};

export const denemeFnType = async (input: RequestInfo, init?: RequestInit) => {
  const response = await fetch(input, init);
  const json = await response.json();
  console.log(json);
};
