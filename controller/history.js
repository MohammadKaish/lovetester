import Love from "../model/user.js"; // adjust path if needed

export async function historyPage(req, res) {
  try {
    const history = await Love.find().sort({ createdAt: -1 }); // newest first
    
    res.render("history", { history });
  } catch (err) {
    res.status(500).send("Failed to fetch history.");
  }
}
