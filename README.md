# SuriMoa Website

수리모아(SuriMoa) AI 기반 주거 수리 및 임대관리 플랫폼의 React 랜딩 페이지입니다.

## 로컬 개발

이 프로젝트는 기본적으로 `Vite + React` 로컬 개발 환경에서 바로 수정하면서 작업할 수 있습니다.

### 준비

- Node.js 20 이상
- npm

### 실행

```bash
npm install
npm run dev
```

기본 개발 주소는 `http://localhost:5173` 입니다.

`npm start`로도 동일하게 개발 서버를 실행할 수 있습니다.

## 빌드

```bash
npm run build
```

## 미리보기

```bash
npm run preview
```

기본 미리보기 주소는 `http://localhost:4173` 입니다.

## Docker 배포

도커 설정은 로컬 개발용이 아니라, 빌드된 정적 파일을 `nginx`로 배포할 때 사용하는 옵션입니다.

### 준비

- Docker
- Docker Compose Plugin

### 실행

기본 포트는 `8080`입니다.

```bash
docker compose up --build -d
```

브라우저에서 `http://서버IP:8080`으로 접속하면 됩니다.

### 80 포트로 서비스할 때

```bash
APP_PORT=80 docker compose up --build -d
```

### 수동 이미지 실행

```bash
docker build -t surimoa-web .
docker run -d --name surimoa-web -p 80:80 surimoa-web
```

### 배포 후 확인

```bash
docker compose ps
docker compose logs -f
```

`deploy/nginx/default.conf`에는 SPA 라우팅을 위한 `index.html` fallback 설정이 포함되어 있습니다.
