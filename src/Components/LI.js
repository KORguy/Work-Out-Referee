import React from "react";
import "../App.css";

export const LI = ({
  email,
  setEmail,
  password,
  setPassword,
  handleLogin,
  handleSignin,
  hasAccount,
  setHasAccount,
  emailError,
  passwordError,
}) => {
  return (
    <section className="login">
      <div className="loginContainer">
        <label>Username</label>
        <input
          type="text"
          autoFocus
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <p className="errorMsg">{emailError}</p>
        <label>Password</label>
        <input
          type="password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <p className="errorMsg">{passwordError}</p>
        <div className="btnContainer">
          {hasAccount ? (
            <>
              <button className="btn" onClick={handleLogin}>
                로그인
              </button>
              <p>
                계정이 없으신가요 ?{" "}
                <span onClick={() => setHasAccount(!hasAccount)}>회원가입</span>
              </p>
            </>
          ) : (
            <>
              <button className="btn" onClick={handleSignin}>
                회원가입
              </button>
              <p>
                이미 계정이 있으신가요 ?{" "}
                <span onClick={() => setHasAccount(!hasAccount)}>로그인</span>
              </p>
            </>
          )}
        </div>
      </div>
    </section>
  );
};
