export const category = [
{id:"1", name:"Web"},
{id:"2", name:"Illustration"}
];
export function getCategory() {
    return category.filter(c => c);
  }