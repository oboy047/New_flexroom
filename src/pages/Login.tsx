export default function Login() {
  return (
    <main style={{ textAlign: "center", padding: "40px" }}>
      <h2>Logg inn</h2>
      <form>
        <input type="text" placeholder="Brukernavn" />
        <input type="password" placeholder="Passord" />
        <button type="submit">Logg inn</button>
      </form>
    </main>
  );
}
