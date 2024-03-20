export const ping = async (req, res) => {
  res.status(200).json({ message: 'pong' });
}