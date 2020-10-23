const xmlTASK = `
<list>
  <student>
    <name lang="en">
      <first>Ivan</first>
      <second>Ivanov</second>
    </name>
    <age>35</age>
    <prof>teacher</prof>
  </student>
  <student>
    <name lang="ru">
      <first>Петр</first>
      <second>Петров</second>
    </name>
    <age>58</age>
    <prof>driver</prof>
  </student>
</list>
`

const parser = new DOMParser();
const xmlDOM = parser.parseFromString(xmlTASK, "text/xml");

const listNode = xmlDOM.querySelector("list");
const listInResult = listNode.tagName;
const students = listNode.querySelectorAll("student")
const result = {};
result[listInResult] = [];

for (let i = 0; i < students.length; i++) {
  const nameNode = students[i].querySelector("name");
  const firstName = nameNode.querySelector("first");
  const secondName = nameNode.querySelector("second");
  const langAttr = nameNode.getAttribute("lang")
  const age = students[i].querySelector("age");
  const prof = students[i].querySelector("prof");
  result.list.push({
    name: `${firstName.textContent} ${secondName.textContent}`,
    age: Number(age.textContent),
    prof: prof.textContent,
    lang: langAttr
  });
}

console.log(result)