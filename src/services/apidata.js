import supabase from "./supabase";

export async function getData() {
  let { data, error } = await supabase
    .from("table1")
    .select("*")
    .order("id", { ascending: false });

  if (error) {
    console.error(error);
    throw new Error("cabin could not be loaded");
  }
  return data;
}

export async function postData(newData) {
  const { data, error } = await supabase.from("table1").insert([newData]);

  if (error) {
    console.error(error.message);
    throw new Error("cabin could not be created");
  }
  return data;
}

export async function deleteData(id) {
  const { data, error } = await supabase.from("table1").delete().eq("id", id);

  if (error) {
    console.error(error);
    throw new Error("cabin could not be deleted");
  }
  return data;
}
